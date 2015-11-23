var DoN = {
  "used":false
};

LabClass.prototype.startFlashGameCounter=function(flashTime){var _this=this;$('#progress_bar .ui-progress-text').html('Earn Double Game Points!');if(flashTime>0){$('.lab-stars, .lab-strand').hide();$('#progress_bar').show();this.flashTime=flashTime;this.flashTimeCounter=flashTime+1;this.updateFlashGameCounter();}else $('#progress_bar').hide();}
LabClass.prototype.updateFlashGameCounter=function(){var _this=this;if(--this.flashTimeCounter>0){var percent=Math.round((this.flashTimeCounter)*100/(this.flashTime));$('#progress_bar .ui-progress').show();$('#progress_bar .ui-progress').css('width',percent+'%');setTimeout(function(){_this.updateFlashGameCounter();},1000);}else{$('#progress_bar .ui-progress').hide();$('#progress_bar .ui-progress-text').html('Sorry, no double game points this time.');MF_DoN.used=true;}}
