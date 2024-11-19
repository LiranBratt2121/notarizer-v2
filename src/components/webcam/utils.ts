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

            const textColor = "rgba(255, 255, 255, 0.8)";
            const shadowColor = "rgba(0, 0, 0, 0.5)";
            const fontSize = Math.max(10, Math.round(img.width / 50));

            ctx.font = `bold ${fontSize}px Arial`;
            ctx.textBaseline = "top";

            addShadow(ctx, shadowColor);

            write(ctx, "Notarizer", img.width * 0.05, img.height * 0.9, "rgba(33, 33, 33, 1)");
            write(ctx, `Notorized-at: ${date}`, img.width * 0.05, img.height * 0.93, textColor);
            write(ctx, `Notorizer-role: ${uploaderRole}`, img.width * 0.05, img.height * 0.96, textColor);

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

export const isMobile = () => {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    console.log(isMobile.any())

    return isMobile.any();
}