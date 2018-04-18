(function(){  
    var name = "李四";   // 私有变量  
    function show(){  
        return "is a good man";  
    }  

    Person = function( n ) {    //  全局静态私有变量   构造函数，可传参初始化，也可以什么都不写  

        name = n;  
//            this.name = n;  
    }  
    Person.prototype.setname = function( n ) {  

        name = n ;     
        // 这么直接赋值操作时，无论new几个出来操作的都是同一内存下的私有变量  
        // 但是如果加上this指针，new出来的对象操作的就是个子内存下的私有变量了  


//            this.name = n;  
    }  
    Person.prototype.getname = function() {  

        return name;  
//            return this.name;  
    }  
})();  

var obj1 = new Person('hehe');  
console.log( obj1.getname() );  
var obj2 = new Person('xixi');  
console.log( obj2.getname() );  
console.log( obj1.getname() ); 