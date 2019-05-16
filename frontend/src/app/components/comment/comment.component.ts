import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Comment } from 'src/app/models/comment/comment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
    @Input() public comment: Comment;

    public constructor() {}

    public ngOnInit() {}
}
