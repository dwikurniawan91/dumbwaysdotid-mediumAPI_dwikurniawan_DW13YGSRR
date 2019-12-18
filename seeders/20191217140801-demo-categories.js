"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "HOME",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ONEZERO",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ELEMENTAL",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "GEN",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ZORA",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FORGE",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "HUMAN PARTS",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "MARKER",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "LEVEL",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "HEATED",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "MODUS",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "MORE",
          is_published: true,
          is_archived: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
