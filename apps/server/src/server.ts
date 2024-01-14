import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export const createServer = (): Express => {
	const app = express();
	app
		.disable("x-powered-by")
		.use(morgan("dev"))
		.use(urlencoded({ extended: true }))
		.use(json())
		.use(cors())
		.get("/message/:name", (req, res) => {
			return res.json({ message: `hello ${req.params.name}` });
		})
		.get("/status", (_, res) => {
			return res.json({ ok: true });
		})
		.get("/notion", async (req, res) => {
			const recordMap = await notion.getPage('65f9c48b5a624405b14e7711570e1ab0')
			return res.json(recordMap)
		});

	return app;
};
