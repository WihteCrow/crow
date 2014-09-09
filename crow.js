/**
 * Created by 乌鸦 on 2014/9/10.
 *
 * 建立自己的库
 *
 * jquery-2.1.1.min.js 放弃IE6、7、8
 */

(function($, window){

    var Crow = function(){
        if(this instanceof Crow){
            this.version = '0.1';
            this.author = 'Crow';
            this.wife = 'yun';
            this.time = '2014/9/10';
        }else{
            return new Crow();
        }
    };

    window.crow = new Crow;

})(jQuery, window);
