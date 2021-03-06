import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';
import './index.less';

class Content extends React.Component {

  static contextTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'content3',
    dataSource: {
      block1: {
        video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
        title: '蚂蚁金融云提供专业的服务',
        content: '科技想象力，金融创造力',
      },
    },
  };


  render() {
    const props = { ...this.props };
    const { video, title, content } = props.dataSource.block1;
    delete props.dataSource;
    delete props.name;
    return (
      <div {...props} className={`${props.className}-wrapper`}>
        <OverPack
          scrollName={this.props.name}
          className={props.className}
          hideProps={{ h1: { reverse: true }, p: { reverse: true }, video: { reverse: true } }}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
          >
            {title}
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
          >
            {content}
          </TweenOne>
          <TweenOne
            key="video"
            animation={{  y: '+=30', opacity: 0, type: 'from', delay: 300 }}
            className={`${props.className}-video`}
          >
            <VideoPlay loop src={video} width="100%"/>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
