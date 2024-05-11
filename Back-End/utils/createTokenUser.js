const createTokenUser = (user) => {
  return {
    name: `${user.firstName} ${user.lastName}`,
    userId: user._id,
    role: user.role,
    profilePicture: user.profilePicture,
  };
};

module.exports = createTokenUser;
