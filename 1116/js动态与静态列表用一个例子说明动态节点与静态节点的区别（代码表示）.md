```

<body>
    <ul id="myUl">
        <li id="static1">静态节点1</li>
    </ul>
    <script>
        // 静态节点
        const oList = document.querySelector('ul');
        console.log(oList.childElementCount);
        const oLi = oList.querySelectorAll("li");
        for(var i=0;i<1;i++){
            oList.appendChild(document.createElement('li'));
        }
        console.log(oLi.length);
        // 动态节点
        const oList1 = document.getElementsByTagName('li');
        console.log(oList1.length);
        const oUl = document.getElementById('myUl');
        for(var i=0;i<1;i++){
            oUl.appendChild(document.createElement('li'));
        }
        console.log(oList1.length);
    </script>
</body>
```

或者

```
<body>
    <script>
        const div1 = document.getElementsByTagName("div");
        const i = 0;
        while(i < div1.length) {
            document.body.appendChild(document.createDocumentFragment("div"));
            i++;
        }

        const div2 = document.getElementsByTagName("div"),i = 0;
        console.log(div2.length);
        while(i < div2.length) {
            document.body.appendChild(document.createElement("div"));
            i++;
        }
        console.log(div2.length);
    </script>
</body>
```

