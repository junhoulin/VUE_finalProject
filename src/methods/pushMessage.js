import emitter from '@/methods/emitter';

export default function pushMessage(response, title = '更新') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
      content: `${title}已更新`,
    });
  } else {
    const message = typeof response.data.message === 'string'
      ? [response.data.message] : response.data.message;
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
