import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Define the Post and Tag types for better type safety
export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  published_at: string;
  tags: Tag[];
  image_url: string; // For the thumbnail
  reading_time: number; // In minutes
}

// Blog Post Card Component
export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/3 overflow-hidden">
            <Image
              src={post.image_url}
              alt={`${post.title} thumbnail`}
              width={400}
              height={400}
              className="object-cover w-full h-48 md:h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 flex flex-col">
            <CardContent className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag.id} variant="secondary">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {/* Create a summary from the content */}
                  {post.content.substring(0, 150).replace(/#/g, "")}...
                </p>
              </div>
              <div className="text-xs text-muted-foreground mt-4">
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.reading_time} min read</span>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
}
