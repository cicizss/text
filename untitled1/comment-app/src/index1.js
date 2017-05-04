/**
 * Created by 陈礼赞 on 2017/3/22.
 */
class index1 extends Component{
    constructor(){
        super()
        this.state={
            isShowHeader:true
        }
    }
    handleShowOrHide(){
        this.setState({
            idShowHeader:!this.state.isShowHeader
        })
    }
    render(){
        return (
            <div>
                {this.state.isShowHeader?<Header/>:null}
            </div>
        )
    }
}