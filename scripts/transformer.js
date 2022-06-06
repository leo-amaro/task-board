/*

The transform() function should accept data as input and transform it

The contents of data folder is fetched from `input.js` file

The function has to transform the data and generate as per the structure given in `expected-output.js`.

The expected-output data is used to render it on the browser using the code provided in `board-renderer.js` file.

The function should return error message 
"Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
if the data is not an object and / or does not contain boards, lists, cards and comments as its array properties


DO NOT MODIFY THE CODE IN OTHER FILES AS IT WILL IMPACT THE TEST OUTCOME AND BROWSER OUTPUT.

*/

export const transform = (data) => {
  // Provide Solution Code Here

  if (
    typeof data !== "object" ||
    !Array.isArray(data.boards) ||
    !Array.isArray(data.lists) ||
    !Array.isArray(data.cards) ||
    !Array.isArray(data.comments)
  ) {
    // Check if data has comments property
    return "Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!";
  } else {
    const output = {
      boards: data.boards
        .filter((board) => board.boardId === data.boards[0].boardId)
        .map((board) => {
          return {
            boardId: board.boardId,
            boardTitle: board.boardTitle,
            lists: data.lists
              .filter((list) => list.boardId === board.boardId)
              .map((list) => {
                return {
                  listId: list.listId,
                  listTitle: list.listTitle,
                  cards: data.cards
                    .filter((card) => card.listId === list.listId)
                    .map((card) => {
                      return {
                        cardId: card.cardId,
                        cardTitle: card.cardTitle,
                        comments: data.comments
                          .filter((comment) => comment.cardId === card.cardId)
                          .map((comment) => {
                            return {
                              commentId: comment.commentId,
                              commentText: comment.commentText,
                            };
                          }).length,
                      };
                    }),
                };
              }),
          };
        }),
    };

    return output.boards;
  }
};
