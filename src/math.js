/*
 * math.js
 */

(function() {
    
    /**
     * @class global.Math
     * Mathの拡張
     */

    
    /**
     * @property    DEG_TO_RAD
     * Degree to Radian.
     */
    Math.DEG_TO_RAD = Math.PI/180;
    
    /**
     * @property    RAD_TO_DEG
     * Radian to Degree.
     */
    Math.RAD_TO_DEG = 180/Math.PI;
    
    /**
     * @method
     * Degree を Radian に変換
     */
    Math.degToRad = function(deg) {
        return deg * Math.DEG_TO_RAD;
    };
    
    /**
     * @method
     * Radian を Degree に変換
     */
    Math.radToDeg = function(rad) {
        return rad * Math.RAD_TO_DEG;
    };
    

    
    /**
     * @method
     * クランプ
     */
    Math.defineFunction("clamp", function(value, min, max) {
        return (value < min) ? min : ( (value > max) ? max : value );
    });
    
    /**
     * @method
     * min <= value <= max のとき true を返す
     */
    Math.defineFunction("inside", function(value, min, max) {
        return (value >= min) && (value) <= max;
    });
    
    /**
     * @method
     * ランダムな値を指定された範囲内で生成
     */
    Math.defineFunction("rand", function(min, max) {
        return window.Math.floor( Math.random()*(max-min+1) ) + min;
    });
    
    /**
     * @method
     * ランダムな値を指定された範囲内で生成
     */
    Math.defineFunction("randf", function(min, max) {
        return window.Math.random()*(max-min)+min;
    });
    
})();

