import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

// Define a function to fetch recipes based on ingredients
export async function fetchRecipesByIngredients() {
  noStore();
  try {
    const recipes = await sql`
      SELECT title, ingredients, instructions
      FROM recipes
      WHERE title = Slow Cooker Chicken and Dumplings
    `;
    
    return recipes.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch recipes.');
  }
}
