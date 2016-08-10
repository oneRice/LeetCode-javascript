var Helper = require('./helper.js');
var repeat = Helper.repeat;

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

var genTreeWithDepth = function (depth, sign) {
    if (depth <= 0) {
        return null;
    }
    var node = new TreeNode();
    var decided = false;
    node.val = Helper.randomInt(1, 1000);
    var judge = Helper.randomInt(1, 1000);
    if (judge > 600) {
        node.left = genTreeWithDepth(depth - 1, true);
        decided = true;
    } else if (judge > 200) {
        node.left = genTreeWithDepth(depth - 1, false);
    }
    
    if (sign && !decided) {
        node.right = genTreeWithDepth(depth - 1, true);
    } else {
        judge = Helper.randomInt(1, 1000);
        if (judge > 600) {
            node.right = genTreeWithDepth(depth - 1, true);
        } else if (judge > 200) {
            node.right = genTreeWithDepth(depth - 1, false);
        }
    }
    return node;
};

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

var treeToArray = function(node, depth, max_depth, arr) {
    if (node === null) {
        arr[depth].push('no');
        return arr;
    }

    arr[depth].push(node.val);
    arr = treeToArray(node.left, depth + 1, max_depth, arr);
    arr = treeToArray(node.right, depth + 1, max_depth, arr);

    return arr;
};


// insert blank with 'no'
var insertBlank = function(arr) {
    for (var line = 0; line < arr.length - 1; line++) {
        for (var column = 0; column < Math.pow(2, line); column++) {
            if (arr[line][column] === 'no') {
                arr[line + 1].splice(2*column, 0, 'no', 'no');
            }
        }
    }
    return arr;
}

var showTree = function(node) {
    var DIV = repeat(' ', 3);

    if (node === null) {
        return 'null';
    }
    var depth = maxDepth(node);
    var msg = '';
    var arr = Array(depth + 1);
    // initialize arr
    for (var a = 0; a < arr.length; a++) {
        arr[a] = [];
    }
    
    arr = treeToArray(node, 0, depth, arr);
    arr = insertBlank(arr);

    // actuall show tree
    for (var line = 0; line < depth - 1; line ++) {
        //print number

        msg += repeat(DIV, Math.ceil((Math.pow(2, depth-1) - Math.pow(2, line))/2));
        for (var column = 0; column < Math.pow(2, line); column++) {
            if (arr[line][column] !== 'no') {
                msg += arr[line][column] + repeat(' ', 4-arr[line][column].toString().length);
            } else {
                msg += DIV;
            }
        }
        msg += '\n';

        //print line
        msg += repeat(DIV, Math.ceil((Math.pow(2, depth-1) - Math.pow(2, line+1))/2));
        for (var column = 0; column < Math.pow(2, line); column++) {
            if (arr[line+1][2*column] !== 'no') {
                msg += '/' + repeat(' ', 3);
            } else {
                msg += DIV;
            }
            if (arr[line+1][2*column + 1] !== 'no') {
                msg += '\\' + repeat(' ', 3);
            } else {
                msg += DIV;
            }
        }
        msg += '\n';    
    }

    // print last line
    for (column = 0; column < Math.pow(2, line); column++) {
        if (arr[depth-1][column] !== 'no') {
            msg += arr[depth-1][column] + repeat(' ', 4-arr[depth-1][column].toString().length);
        } else {
                msg += DIV;
        }
    }
    
    return msg;
};

exports.genTreeWithDepth = genTreeWithDepth;
exports.showTree = showTree;