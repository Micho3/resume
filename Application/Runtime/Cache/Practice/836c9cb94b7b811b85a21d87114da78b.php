<?php if (!defined('THINK_PATH')) exit();?><html>
<head>
    <meta charset="utf-8">
    <title>佘佩刚</title>
    <link rel="stylesheet" href="/Public/Common/css/common.css" type="text/css">
    <link rel="stylesheet" href="/Public/Practice/css/index.css" type="text/css">
    <!--<script type="text/javascript" src="/Public/js/conf.js"></script>-->
    <!--<script type="text/javascript" src="/Public/js/vue.js"></script>-->
    <script type="text/javascript" src="/Public/Common/js/ajax.js"></script>
    <script type="text/javascript" src="/Public/Common/js/functions.js"></script>
</head>
<body>
    <div class="body" id="ll_index">
        <ul class="ll_tree" id="ll_tree" v-if="treeShow">
            <!--<div class='ll_trunk_bark' v-for="item in trunk">-->
                <!--<li class='ll_trunk' v-on:click='item.show=toggleTrunk(item.show);'>{{item.title}}</li>-->
                <!--<ul class="ll_leaf" v-if="item.show">-->
                    <!--<li v-for="o in item.data" v-on:click='hideTree()'>{{o}}</li>-->
                <!--</ul>-->
            <!--</div>-->
        <ul>
    </div>
    <div class="loading">
        <img src="/Public/img/loading.jpg">
    </div>
</body>
<script type="text/javascript" src="/Public/Practice/js/index.js"></script>
</html>