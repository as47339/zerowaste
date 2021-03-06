const { skip } = require('graphql-resolvers');
const Recipe = require('../../database/models/recipe');

module.exports.isAuthenticated = (_, __, { user }) => {
  if (!user) {
    throw new Error('Access Denied! Please login to continue');
  }
  return skip;
}

module.exports.isRecipeOwner = async (_, { id }, { userId }) => {
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      throw new Error('Recipe not found');
    } else if (recipe.user.toString() !== userId) {
      throw new Error('Not authorized as recipe owner');
    }
    return skip;
  } catch (error) {
    throw error;
  }
}

module.exports.isRecipeOwner = async (_, { id }, { userId }) => {
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      throw new Error('Recipe not found');
    } else if (recipe.user.toString() !== userId) {
      throw new Error('Not authorized as recipe owner');
    }
    return skip;
  } catch (error) {
    throw error;
  }
}