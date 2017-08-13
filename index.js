    var api, autho, backgroundRGB, key;
    api = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1";
    autho = "X-Mashape-Authorization";
    key = "Bk47jF0aCnmshsTi1VQAyxueTH2ap1BJxjejsnw9wHKPr2OmG4";

    var loadquote = function() {
        $.ajax({
                type: "GET",
                url: api,
                data: {},
                dataType: 'json',
                success: function(data) {
                $("#quote-text").html('"' + data.quote + '"');
                $("#quote-author").html('&mdash;' + ' ' + data.author);  
                $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + data.quote + '"' + ' ' + ' ' + ' ' + ' \u2014' + ' ' + data.author).attr('target', '_blank');
                $('#facebook-quote').attr('href', 'https://m.facebook.com/?hrc=1&refsrc=http%3A%2F%2Fh.facebook.com%2Fhr%2Fr&_rdr=' + '"' + data.quote + '"' + ' ' + ' ' + ' ' + ' \u2014' + ' ' + data.author).attr('target', '_blank');
            
                },
                error: function(err) { alert("Internet Disconnected!"); },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(autho, key);
                }
        });
    };

    var backgroundChange = function() {
        x = Math.floor(Math.random() * 256);
        y = Math.floor(Math.random() * 256);
        z = Math.floor(Math.random() * 256);
        backgroundRGB = "rgb(" + x + "," + y + "," + z + ")";
       document.body.style.backgroundColor = backgroundRGB;
       document.getElementById("quote-text").style.color = backgroundRGB;
       document.getElementById("tweet-quote").style.color = backgroundRGB;
       document.getElementById("quote-author").style.color = backgroundRGB;
       document.getElementById("facebook-quote").style.color = backgroundRGB;
       document.getElementById("new-quote").style.color = backgroundRGB;
    }

    

   
    var transition = function() {
        document.getElementById("quote-box").style.transition = "all 2s";
    }
    $("#new-quote").on("click", function() {
        loadquote();
        backgroundChange();
        transition();
    })
    //coded by teegoldz