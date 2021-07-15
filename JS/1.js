        //     Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.
        function cloneDeep(obj) {
            const newObject = JSON.parse( JSON.stringify(obj) );
            return newObject;
        }
        
        console.log(cloneDeep({a: "Vasia is here", b: {d: "Hi", e: "hello", c:{f: "Ok", i: "Cancel"}}, g: "End"}));