import { MOVES } from './mock-moves';
import { Move } from './move';

// What would this look like with recursion?
export function makeGroupedArray() {
    // Make keep track of what bucket of the groupedArray we are in.
    let j = 0;
    // This will hold an array of styles and their moves.
    let groupedMovesArray: any[] = [];
    // This will hold the current style's moves.
    let tempArray: Move[] = [];

    // Loop through each of the items in Moves to separate into multiple arrays
    // based on the move's style. This will allow me an easier time splitting
    // the moves into their respective template sections.
    MOVES.map((move: Move, i) => {
        // Set the move.id according to its order within their style category.
        move.id = tempArray.length + 1;

        // Check to see if current move's style already has a bucket and if it doesn't, then make one.
        if (move.style === MOVES[j].style) {
            // We're creating a temporary bucket for the current style and pushing the move into it.
            tempArray.push(move);

            // Else, the current move's style doesn't match the style of the latest bucket
        } else {
            // Check to see if current move's style already has a bucket and if it doesn't, then make one.
            if (move.style !== tempArray[tempArray.length - 1].style) {
                // Before filling more buckets, dump the last bucket into the groupedArray
                groupedMovesArray.push(tempArray);
                console.log('new style', move.style)
                // Empty temp array
                tempArray = [];
                // Inform what bucket to fill in to next.
                j++;
            }

            // Set the move.id according to its order within their style category.
            move.id = tempArray.length + 1;

            // Push the move into it's temporary style bucket.
            tempArray.push(move);
        }
    });

    // Push the last style bucket into the array that holds all styles.
    groupedMovesArray.push(tempArray);

    // Return the grouped array
    return groupedMovesArray;
}