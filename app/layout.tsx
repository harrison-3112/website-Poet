import type { Metadata } from "next";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const uiSans = Be_Vietnam_Pro({
  variable: "--font-ui-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const poemSerif = Noto_Serif({
  variable: "--font-poem-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ngô Đức Tâm | Di Sản Thi Ca",
  description:
    "Di sản số lưu giữ thơ, âm nhạc phổ thơ, hành trình sáng tác và tư liệu của nhà thơ Ngô Đức Tâm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${uiSans.variable} ${poemSerif.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Script id="strip-bis-skin-checked" strategy="beforeInteractive">
          {`(function(){
              var attrName = "bis_skin_checked";
              var root = document.documentElement;
              var clearAttr = function(node){
                if (!node || typeof node !== "object") return;
                if (node.nodeType === 1 && node.hasAttribute && node.hasAttribute(attrName)) {
                  node.removeAttribute(attrName);
                }
              };
              var clearTree = function(node){
                clearAttr(node);
                if (!node || !node.querySelectorAll) return;
                var nodes = node.querySelectorAll("[" + attrName + "]");
                for (var i = 0; i < nodes.length; i += 1) {
                  nodes[i].removeAttribute(attrName);
                }
              };

              clearTree(root);

              var observer = new MutationObserver(function(mutations){
                for (var i = 0; i < mutations.length; i += 1) {
                  var mutation = mutations[i];

                  if (mutation.type === "attributes" && mutation.attributeName === attrName) {
                    clearAttr(mutation.target);
                  }

                  if (mutation.type === "childList" && mutation.addedNodes) {
                    for (var j = 0; j < mutation.addedNodes.length; j += 1) {
                      clearTree(mutation.addedNodes[j]);
                    }
                  }
                }
              });

              observer.observe(root, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [attrName],
              });

              window.addEventListener("load", function(){
                setTimeout(function(){
                  observer.disconnect();
                }, 6000);
              }, { once: true });
            })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
