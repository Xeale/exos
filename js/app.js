var exos = [
  {id: 'exo1', nav: '#1', title: 'Exo 01'},
  {id: 'exo2', nav: '#2', title: 'Exo 02'},
  {id: 'exo3', nav: '#3', title: 'Exo 03'},
  {id: 'exo4', nav: '#4', title: 'Exo 04'},
  {id: 'exo5', nav: '#5', title: 'Exo 05'},
  {id: 'exo6', nav: '#6', title: 'Exo 06'},
  {id: 'exo7', nav: '#7', title: 'Exo 07'},
  {id: 'exo8', nav: '#8', title: 'Exo 08'},
  {id: 'exo9', nav: '#9', title: 'Exo 09'},
  {id: 'exo10', nav: '#10', title: 'Exo 10', file: 'exo10.php'},
];

var appCheck = {
  init: function () {
    var target = $('#nav');
    $('<a href="index.html">Home</a>').appendTo(target);
    $.each(exos, function(index) {
      var uri = exos[index].file || 'exo'+(index+1)+'.html';
      $('<a>', {
        href: uri,
        text: exos[index].nav || 'Exo'+(index+1),
      }).appendTo(target);
      if ($('.exo').length) {
        var link = $('<a>', {
          href: exos[index].file || uri,
          class: 'lien-epreuve',
          text: exos[index].title || 'Lancer l\'exercice',
        });
        $('.exo').eq(index).append(link);
      }
    });

    //active
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    $('#nav a').each(function(i,e) {
      var cur = $(e);
      if (cur.attr('href') === filename) cur.addClass('active');
    });
  },
};

var check = {
  init: function() {
    check.area = $('#test');
    check.container = $('#container');
    check.area.removeClass();
  },
  clean: function(){
    check.area.removeClass();
  },
  default: function() {
    var success = false;

    check.display(success);
  },
  exo5: function(fn) {
    check.init();
    if (fn(4) === 8 && fn(-4) === -8 && fn(0) === 0){
      check.area.sparkleh({
        count: 2050,
        color:'rainbow',
        overlap: 100,
      });
      check.area.addClass('success-sparkle');
    } 
    else {
      check.area.addClass('error-sparkle');
    } 
  },
  exo6: function(fn) {
    check.init();
    if (!fn(1) && fn(2) && !fn(3) && fn(35468432)){
      check.area.sparkleh({
        count: 2050,
        color:'rainbow',
        overlap: 100,
      });
      check.area.addClass('success-sparkle');
    } 
    else {
      check.area.addClass('error-sparkle');
    } 
  },
  exo7: function(fn) {
    check.init();
    if (fn('test1.css') === 'css'
      && fn('jquery.min.js') === 'js'
      && fn('.eslintrc') === 'eslintrc'
      && fn('monfichier') === false) check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo8: function(fn) {
    check.init();
    if (fn(['coucou', 'hello', 'bonjour']) === 'bonjour'
      && fn(['css', 'html', 'js', 'php']) === 'html'
      && fn([]) === false
      && fn(['un', 2, 'trois', 4, 'cinq']) === 'trois') check.area.addClass('success');
    else check.area.addClass('error');
  },
  exo9: function(fn) {
    check.init();
    if (fn([1, 2, 3]) === 6
      && fn(['un', 2, 'trois', 4, 'cinq']) === 6
      && fn([]) === 0
      && fn([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45) check.area.addClass('success');
    else check.area.addClass('error');
  },
  display: function(success) {
    $('#test').removeClass().addClass(success ? 'success' : 'error');
  }
};

$(appCheck.init);



$.fn.sparkleh = function( options ) {
    
  return this.each( function(k,v) {
    
    var $this = $(v).css("position","relative");
    
    var settings = $.extend({
      width: $this.outerWidth(),
      height: $this.outerHeight(),
      color: "#FFFFFF",
      count: 30,
      overlap: 0,
      speed: 1
    }, options );
    
    var sparkle = new Sparkle( $this, settings );
    sparkle.over();
    
    // $this.on({
    //   "mouseover focus" : function(e) {
    //   },
    //   "mouseout blur" : function(e) {
    //     sparkle.out();
    //   }
    // });
    
  });
  
}




function Sparkle( $parent, options ) {
  this.options = options;
  this.init( $parent );
}

Sparkle.prototype = {
  
  "init" : function( $parent ) {
    
    var _this = this;
    
    this.$canvas = 
      $("<canvas>")
        .addClass("sparkle-canvas")
        .css({
          position: "absolute",
          top: "-"+_this.options.overlap+"px",
          left: "-"+_this.options.overlap+"px",
          "pointer-events": "none"
        })
        .appendTo($parent);
    
    this.canvas = this.$canvas[0];
    this.context = this.canvas.getContext("2d");
    
    this.sprite = new Image();
    this.sprites = [0,6,13,20];
    this.sprite.src = this.datauri;
    
    this.canvas.width = this.options.width + ( this.options.overlap * 2);
    this.canvas.height = this.options.height + ( this.options.overlap * 2);
    
    
    this.particles = this.createSparkles( this.canvas.width , this.canvas.height );
    
    this.anim = null;
    this.fade = false;
    
  },
  
  "createSparkles" : function( w , h ) {
    
    var holder = [];
    
    for( var i = 0; i < this.options.count; i++ ) {
      
      var color = this.options.color;
      
      if( this.options.color == "rainbow" ) {
        color = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
      } else if( $.type(this.options.color) === "array" ) {
        color = this.options.color[ Math.floor(Math.random()*this.options.color.length) ];
      }

      holder[i] = {
        position: {
          x: Math.floor(Math.random()*w),
          y: Math.floor(Math.random()*h)
        },
        style: this.sprites[ Math.floor(Math.random()*4) ],
        delta: {
          x: Math.floor(Math.random() * 1000) - 500,
          y: Math.floor(Math.random() * 1000) - 500
        },
        size: parseFloat((Math.random()*2).toFixed(2)),
        color: color
      };
            
    }
    
    return holder;
    
  },
  
  "draw" : function( time, fade ) {
        
    var ctx = this.context;
    
    ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
          
    for( var i = 0; i < this.options.count; i++ ) {

      var derpicle = this.particles[i];
      var modulus = Math.floor(Math.random()*7);
      
      if( Math.floor(time) % modulus === 0 ) {
        derpicle.style = this.sprites[ Math.floor(Math.random()*4) ];
      }
      
      ctx.save();
      ctx.globalAlpha = derpicle.opacity;
      ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);
      
      if( this.options.color ) {  
        
        ctx.globalCompositeOperation = "source-atop";
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = derpicle.color;
        ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);
        
      }
      
      ctx.restore();

    }
    
        
  },
  
  "update" : function() {
    
     var _this = this;
    
     this.anim = window.requestAnimationFrame( function(time) {

       for( var i = 0; i < _this.options.count; i++ ) {

         var u = _this.particles[i];
         
         var randX = ( Math.random() > Math.random()*2 );
         var randY = ( Math.random() > Math.random()*3 );
         
         if( randX ) {
           u.position.x += ((u.delta.x * _this.options.speed) / 1500); 
         }        
         
         if( !randY ) {
           u.position.y -= ((u.delta.y * _this.options.speed) / 800);
         }

         if( u.position.x > _this.canvas.width ) {
           u.position.x = -7;
         } else if ( u.position.x < -7 ) {
           u.position.x = _this.canvas.width; 
         }

         if( u.position.y > _this.canvas.height ) {
           u.position.y = -7;
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         } else if ( u.position.y < -7 ) {
           u.position.y = _this.canvas.height; 
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         }
         
         if( _this.fade ) {
           u.opacity -= 0.02;
         } else {
           u.opacity -= 0.005;
         }
         
         if( u.opacity <= 0 ) {
           u.opacity = ( _this.fade ) ? 0 : 1;
         }
         
       }
       
       _this.draw( time );
       
       if( _this.fade ) {
         _this.fadeCount -= 1;
         if( _this.fadeCount < 0 ) {
           window.cancelAnimationFrame( _this.anim );
         } else {
           _this.update(); 
         }
       } else {
         _this.update();
       }
       
     });

  },
  
  "cancel" : function() {
    
    this.fadeCount = 100;

  },
  
  "over" : function() {
    
    window.cancelAnimationFrame( this.anim );
    
    for( var i = 0; i < this.options.count; i++ ) {
      this.particles[i].opacity = Math.random();
    }
    
    this.fade = false;
    this.update();

  },
  
  "out" : function() {
    
    this.fade = true;
    this.cancel();
    
  },
  
  
  
  "datauri" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=="

}; 


