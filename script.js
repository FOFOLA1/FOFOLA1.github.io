
window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Miss you ❤';
    
    document.addEventListener('visibilitychange', function(e) {
        var isPageActive = !document.hidden;
    
        if(!isPageActive){
            document.title = attentionMessage;
        }else {
            document.title = pageTitle;
        }
    });
};

function copy() {
    navigator.clipboard.writeText("filip.rehacek@outlook.cz").then(() => {
        alert('E-mail address copied to clipboard');
    }, () => {
        console.error('Failed to copy');
    });
};