﻿using Thread_.NET.DAL.Entities.Abstract;

namespace Thread_.NET.DAL.Entities
{
    public class PostReaction: Reaction
    {
        public int PostId { get; set; }
        public Post Post { get; set; }
    }
}
