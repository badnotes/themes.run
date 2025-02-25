import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
	// loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string().optional(),

			type: z.string().optional(), // 类别
			author: z.string().optional(), // 作者
			images: z.array(z.object({
				src: z.string().optional(),
				alt: z.string().optional(),
			  })).optional(), // 图片
			git: z.string().optional(), // 代码
			web: z.string().optional(), // 效果
			price: z.string().optional(), // 费用
			license: z.string().optional(), // 许可
			tags: z.array(z.string()).optional(), //标签
			overview: z.string().optional(),
		})
})

export const collections = {
	blog
}
