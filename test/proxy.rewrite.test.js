/**
 * @file
 * @author zdying
 */

'use strict';

var assert = require('assert');
var path = require('path');
var fs = require('fs');

var parseHosts = require('../src/proxy/parseHosts');

describe('proxy rewrite',function(){
    var formatAST = require('../src/proxy/formatAST');
    var AST = require('../src/proxy/AST');

    it('正确解析AST', function(){
        var sourceCode = fs.readFileSync(__dirname + '/proxy/rewrite.example');
        var rules = AST(sourceCode);

        var target = require('./proxy/ASTTree.result');

        assert(JSON.stringify(rules) === JSON.stringify(target))
    });

    it('正确解析格式化AST Tree', function(){
        var sourceCode = fs.readFileSync(__dirname + '/proxy/rewrite.example');
        var rules = AST(sourceCode);
        var formatedTree = formatAST(rules);

        var target = require('./proxy/formatedASTTree.result');

        assert(JSON.stringify(formatedTree) === JSON.stringify(target))
    });

});