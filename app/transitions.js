import Post from './models/post';

export default function() {
    this.transition(
        this.hasClass('post-list'),
        this.use('toLeft'));
}
