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
			star: z.number().optional(), // git start
			web: z.string().optional(), // 效果
			price: z.string().optional(), // 费用
			license: z.string().optional(), // 许可
			tags: z.array(z.string()).optional(), //标签
			overview: z.string().optional(),
			css: z.string().optional(), // CSS
			ui: z.string().optional(), // UI
			ssg: z.string().optional(), // SSG 同上面type，此字段暂时未使用
			cat: z.string().optional(), // 分类- Blog/Dashboard/Documentation/Bussiness/Landing Page/Portfolio/Product/Starter Template/Theme
			distribution: z.string().optional(), // 分发-OpenSource/Free/Premium
			blueprint: z.string().optional(), // 蓝图 - Template&Themes/UI/Components
			cms: z.string().optional(), // CMS - 内容管理系统
		})
})

const article = defineCollection ({
	type: "content", 
	schema: () => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.string().optional(),
		categories: z.array(z.string()).default(['others']),
		tags: z.array(z.string()).default(['others']),
		author: z.string().optional(), // 作者
		type: z.string().optional(), // 类别
	})
})

export const collections = {
	blog, article
}
