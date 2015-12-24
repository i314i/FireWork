'use strict';
import React,{Component}  from 'react';
export class SaveDialog extends React.Component{
    closeDialog(){
        $('.dialogSave').removeClass('active');
    }
    getBtnBack(){
        setTimeout(function(){
            $('.optionBtn').removeClass('hide');
        },600);
    }
    render(){
        return(
                <div className={'dialogSave dialog'}>
                <h3 className={'dialogTitle'}>Choose</h3>
                <div className={'dialogBtnDiv'}>
                <button id={'dialogSaveSaveBtn'} className={'optionBtn'} onClick={this.props.saveClick}>Save</button>
                <button id={'dialogSaveReplayBtn'} className={'optionBtn'} onClick={this.props.replayClick}>Replay</button>
                <button id={'dialogSaveAgainBtn'}className={'optionBtn'} onClick={this.props.againClick}>Restart</button>
                <button id={'dialogSaveContinueBtn'} className={'optionBtn'} onClick={this.props.continueClick}>Continue</button>
                <button id={'dialogSaveQuitBtn'}className={'optionBtn'} onClick={this.props.quitClick}>Quit</button>
                </div>
                </div>
              );
    }
}
export class LoadDialog extends Component{
    render(){
        return(
                <div className={'dialogLoad dialog'}>
                <h3 className={'dialogTitle dialogLoadTitle'}>Load</h3>
                <button className={'dialogLoadBtn dialogLoadRemoteBtn'} onClick={this.props.remoteLoadClick}>Load</button>
                <h3 className={'dialogLoadSmallTitle dialogLoadRemoteTitle'}>Remote</h3>
                <span className={'dialogLoad-inputform'}>
                <h3 className={'dialogLoadWord'}>Card name:</h3>
                <input id={'cardName-input'} className={'word-input'}/>
                </span>
                <span className={'dialogLoad-inputform'}>
                <h3 className={'dialogLoadWord'}>Password:</h3>
                <input id={'password-input'} className={'word-input'}/>
                </span>
                <h3 className={'dialogLoadSmallTitle'}>Local</h3>
                <span className={'dialogLoad-inputform'}>
                <h3 className={'dialogLoadWord dialogLoadLocalWord dialogLoadNoFile'}>No Saved File</h3>
                <button className={'dialogLoadBtn dialogLoadLocalBtn dialogLoadNoFile'} onClick={this.props.localLoadClick}>Load</button>
                </span>
                <button className={'dialogLoadBtn dialogLoadQuitBtn'} onClick={this.props.quitClick}>Quit</button>

                </div>
                );
    }
}
export class UploadDialog extends Component{
    closeDialog(){
        $('.dialogUpload').removeClass('active');
    }
    render(){
        return(
                <div className={'dialogUpload dialog'}>
                <h3 className={'dialogTitle dialogUploadTitle'}>Upload</h3>
                <span className={'dialogUploadSpan'}>
                <h3 className={'dialogUploadWord'}>Card name:</h3>
                <input id={'uploadCardName-input'} className={'word-input'}/>
                </span>
                <span className={'dialogUploadSpan'}>
                <h3 className={'dialogUploadWord'}>Password:</h3>
                <input id={'uploadPassword-input'} className={'word-input'}/>
                </span>
                <span className={'dialogUploadBtnSpan'}>
                <button className={'dialogUploadBtn dialogUploadQuitBtn'} onClick={this.props.quitClick}>Don't Upload</button>
                <button className={'dialogUploadBtn dialogUploadUploadBtn'} onClick={this.props.uploadClick}>Upload</button>
                </span>
                </div>
              );
    }
}
export class ReplayDialog extends React.Component{
    closeDialog(){
        $('.dialogReplay').removeClass('active');
    }
    render(){
        return(
                <div className={'dialogReplay dialog'}>
                <h3 className={'dialogTitle'}>Choose</h3>
                <div className={'dialogBtnDiv'}>
                <button id={'dialogReplayReplayBtn'} className={'optionBtn'} onClick={this.props.replayClick}>Replay</button>
                <button id={'dialogReplayQuitBtn'}className={'optionBtn'} onClick={this.props.quitClick}>Quit</button>
                </div>
                </div>
              );
    }
}
export class AboutDialog extends React.Component{
    render(){
        return(
                <div className={'dialogAbout dialog'}>
                <h3 className={'dialogAboutTitle dialogAboutBigTitle'}>Firework</h3>
                <span className={'dialogAboutSpan'}>
                <h3 className={'dialogAboutTitle'}>Author:</h3>
                <h3 className={'dialogAboutContent'}>noootown（沒一村）</h3>
                </span>
                <span className={'dialogAboutSpan'}>
                <h3 className={'dialogAboutTitle'}>Github:</h3>
                <a className={'dialogAboutLink'} href="https://github.com/noootown/FireWork">noootown</a>
                </span>
                <span className={'dialogAboutSpan'}>
                <h3 className={'dialogAboutTitle'}>Blog:</h3>
                <a className={'dialogAboutLink'} href="https://noootown.wordpress.com/">沒一村生活點滴</a>
                </span>
                <button className={'dialogAboutBtn dialogAboutQuitBtn'} onClick={this.props.quitClick}>Quit</button>
                </div>
              );
    }
}
export class HelpDialog extends React.Component{
    render(){
        return(
                <div className={'dialogHelp dialog'}>
                <h3 className={'dialogAboutTitle dialogAboutBigTitle'}>Help</h3>
                <p className={'dialogHelpWords'}>
                1. 按<span style={{color:'#FF0000'}}> 空白鍵 </span>可以切換一般煙火和英數字。
                <br/>
                2. 按<span style={{color:'#FF0000'}}> , </span>可以開關煙火柱。
                <br/>
                3. 按<span style={{color:'#FF0000'}}> F2 </span>可以暫停動畫，這時輸入任何鍵都可以將煙火存入暫存。再按一次<span style={{color:'#FF0000'}}> F2 </span>可以同時發射所有暫存的煙火。
                <br/>
                4. Firework提供兩種儲存方式，儲存在<span style={{color:'#FF0000'}}> local</span>，則下次再登入網站，依然可以播放最近的存檔。儲存在<span style={{color:'#FF0000'}}> remote</span>，輸入卡片名稱和密碼，即可觀看卡片。
                <br/>
                <span style={{color:'#FF0000',width:'150px',position:'absolute',left:'50%',margin:'20px 0 0 -60px',fontSize:'25px'}}>Have fun!!!</span>
                </p>
                <button className={'dialogAboutBtn dialogHelpQuitBtn'} onClick={this.props.quitClick}>Quit</button>
                </div>
              );
    }
}
