const { db } = require('@vercel/postgres');
const recipes = require('./recipes');

async function seedRecipes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Drop the "recipes" table if it exists
    await client.sql`DROP TABLE IF EXISTS recipes`;

    // Create the "recipes" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS recipes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    ingredients JSONB NOT NULL,
    instructions TEXT NOT NULL,
    processed_ingredients JSONB NOT NULL
  );
`;

    console.log(`Created "recipes" table`);
    
    // Insert data into the "recipes" table
    const insertedRecipes = await Promise.all(
      recipes.map(async (recipe) => {
      const { title, ingredients, instructions, processed_ingredients } = recipe;
      const insertedRecipe = await client.sql`
        INSERT INTO recipes (title, ingredients, instructions, processed_ingredients)
        VALUES (${title}, ${JSON.stringify(ingredients)}, ${instructions}, ${JSON.stringify(processed_ingredients)})
        ON CONFLICT (id) DO NOTHING;
      `;
      console.log(title);
      return insertedRecipe;
    }));

    console.log(`Seeded ${insertedRecipes.length} recipes`);

    return {
      createTable,
      recipes: insertedRecipes,
    };
  } catch (error) {
    console.error('Error seeding recipes:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedRecipes(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
