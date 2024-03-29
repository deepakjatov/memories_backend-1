import { WithId } from 'mongodb';
import * as z from 'zod';

import { db } from '../../db';

export const Post = z.object({
  firstname: z.string(),
  lastname: z.string(),
  image: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
    
});

export type Post = z.infer<typeof Post>;
export type PostWithId = WithId<Post>;
export const Posts = db.collection<Post>('Post');