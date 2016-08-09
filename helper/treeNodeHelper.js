var Helper = require('./helper.js');

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

var treeToArray = function(node, depth, arr) {
    if (node === null) {
        return arr;
    }

    if (arr.length === depth) {
        arr.push([]);
    }

    arr[depth].push(node.val);
    arr = treeToArray(node.left, depth + 1, arr);
    arr = treeToArray(node.right, depth + 1, arr);

    return arr;
};

var showTree = function(node) {
    var msg = '';
    var arr = [[]];
    var list = treeToArray(node, 0, arr);
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].length; j++) {
            msg += list[i][j] + ' ';
        }
        msg += '\n';
    }
    return msg;
};

exports.genTreeWithDepth = genTreeWithDepth;
exports.showTree = showTree;