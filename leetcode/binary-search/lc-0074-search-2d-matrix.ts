/*
Problem:
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

function search2DMatrix(
    matrix: Array<Array<number>>, 
    target: number
): boolean {

    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let top = 0;
    let bottom = rows - 1;
    
    while (top <= bottom) {
        let row = Math.floor((top + bottom) / 2);
        
        if (target < matrix[row][0]) {
            bottom = row - 1;
        } else if (target > matrix[row][cols - 1]) {
            top = row + 1;
        } else {
            break;
        }
    }
    
    if (bottom < top) {
        return false;
    }
    
    let row = Math.floor((top + bottom) / 2);
    let left = 0;
    let right = cols - 1;
    
    while (left <= right) {
        let col = Math.floor((left + right) / 2);
        
        if (target < matrix[row][col]) {
            right = col - 1;
        } else if (target > matrix[row][col]) {
            left = col + 1;
        } else {
            return true;
        }
        
    }
    
    return false;
}

/*
time complexity = O(log(n) + log(m))
*/
