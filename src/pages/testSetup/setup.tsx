import React, { Component } from 'react'
import './setup.less';

function SetupItem(item: any) {
  console.log("data----", item);
  const { length, idx, data } = item;
  const style = {
    width: `${100 / (length - 1)}%`
  };
  return (
  <div className="setup-item" style={style}>
    {/* 对应每个点的圆圈，这里根据状态添加类名，样式在class样式中定义 */}
    <div className="cricle">
      <div className="item-label">{data.secProgress || ''}</div>
      <div className="item-tips">{data.secTips || ''}</div>
    </div>
    {/* 进度条的线条，具体样自己调整，最后一部不显示已经控制 */}
    { idx !== length - 1 ? <div className="setup-line" /> : null}
  </div>
  )
}

function leftBtnShow(l: number, cur: number): boolean {
  return Boolean(l > 3 && cur > 1);
}
function rightBtnShow(l: number, cur: number): boolean {
  return Boolean(l > 3 && cur < l - 2);
}

export default class Setup extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '测试进度',
      currentIndex: null,
      processCopy: [],
      process: []
    }
  }

  componentWillUpdate(nextProps: any) {
    console.log('------', nextProps, this.props);
    if (nextProps.progress !== this.props.progress) {
      const { progress } = nextProps;
      this.setState({ processCopy: process }); // 备份（可以不用，props中有数据）
      this.processSetupData(progress);
    }
  }

  arrowClick = (direction: string, isShow: boolean) => {
    if (!isShow) return;
    let { currentIndex } = this.state;
    let { progress } = this.props;
    console.log('点击箭头', direction, currentIndex);
    if ( (currentIndex <= 1 && direction === 'left') || (currentIndex >= progress.length - 2 && direction === 'right')) {
      return;
    }
    currentIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;  
    this.setState({ currentIndex }, () => {
      console.log('修改后的数据', this.state);
      this.processSetupData(progress);
    });
  }

  processSetupData = (list: any[]) => {
    const setupList = [...list];
    if (setupList && setupList.length) {
      let currentIndex = this.state.currentIndex;
      if (currentIndex === null) {
        currentIndex = setupList.findIndex((item: any) => item.current === 'Y');
      }
      const startIndex: number = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
      const nowArr = setupList.slice(startIndex, currentIndex + 2);
      console.log('----处理数据', currentIndex, nowArr);
      // 根据当前值获取最近数据
      this.setState({ currentIndex, process: nowArr });
    }
  }

  render() {
    const { process, currentIndex } = this.state;
    let { progress: progressResouce } = this.props;
    const leftArrowShaw = leftBtnShow(progressResouce.length, currentIndex);
    const rightArrowShaw = rightBtnShow(progressResouce.length, currentIndex);
    return (
      <div className='setup-wrap'>
        { <div className={`arrow ${leftArrowShaw ? 'arrow-left' : ''}` } onClick={() => { this.arrowClick('left', leftArrowShaw) }} /> }
        {/* { progressResouce.length > 3 ? <div className="arrow arrow-left" onClick={() => { this.arrowClick('left') }} /> : null} */}
        <div className="setup-bar">
          { process && process.length ? process.map((item: any, idx: number) => {
            return <SetupItem length={process.length} idx={idx} key={idx} data={item} />
          }) : null}
        </div>
        {/* <div className="arrow arrow-right" onClick={() => { this.arrowClick('right') }} /> */}
        { <div className={`arrow ${rightArrowShaw ? 'arrow-right' : ''}` } onClick={() => { this.arrowClick('right', rightArrowShaw) }} /> }
      </div>
    )
  }
}
