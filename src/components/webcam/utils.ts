import { WatermarkProps } from "./types";

export const addWatermark = (imageSrc: string, { date, uploaderRole }: WatermarkProps) => {
    return new Promise<HTMLCanvasElement>((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) {
                reject(new Error("No context available for HTML canvas"));
                return;
            }

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0, img.width, img.height);

            const textColor = "rgba(255, 255, 255, 0.7)";
            const shadowColor = "rgba(0, 0, 0, 0.5)";
            const fontSize = Math.max(20, Math.round(img.width / 50));
            ctx.font = `bold ${fontSize}px Arial`;
            ctx.textBaseline = "top";

            addShadow(ctx, shadowColor);

            write(ctx, "Notarizer", img.width * 0.05, img.height * 0.85, "rgba(33, 33, 33, 0.9)");
            write(ctx, `Uploaded-at: ${date}`, img.width * 0.05, img.height * 0.9, textColor);
            write(ctx, `Uploader-role: ${uploaderRole}`, img.width * 0.05, img.height * 0.95, textColor);

            ctx.shadowColor = "transparent";

            resolve(canvas); 
            console.log("GOT YOU")
        };

        img.onerror = () => {
            reject(new Error("Failed to load the image"));
        };
    });
};

const write = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string) => {
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
};

const addShadow = (ctx: CanvasRenderingContext2D, shadowColor: string) => {
    ctx.shadowColor = shadowColor;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 4;
};
