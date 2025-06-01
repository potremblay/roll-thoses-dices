import { Outlet } from "react-router";

export default function MainLayout() {
  const containerCss = `
    bg-linear-(--linear-gold)
    border-2
    border-solid
    border-black
   
    aspect-[3/5]
    max-h-[calc(100vh-2.5rem)] 
    max-w-[calc(100vw-2.5rem)] 
    mx-auto
    my-[1.125rem] 
    rounded-2xl
    p-[4px]
    overflow-hidden
  `;

  const arcCss = `
    box-border
    border-3
    border-black
    rounded-t-[16rem]
    rounded-b-[1.5rem]
    w-full h-full
   
  `;

  return (
    <main className="p-[1px]">
      <div className={containerCss}>
        <div
          className="bg-main-bg
              pt-2 
              px-4 
              pb-4
              rounded-2xl 
              w-full h-full
             
              shadow-xl/30
              "
        >
          <div
            className={
              arcCss +
              "   border-1 border-solid border-black p-2  bg-linear-(--linear-gold)"
            }
          >
            <div className={arcCss + "  p-1 bg-linear-(--linear-metal)"}>
              <div
                className={
                  arcCss +
                  "  border-1 border-solid border-(primary-mosaic) bg-main-bg pt-[100px] pl-3 pr-3 pb-3"
                }
              >
                <Outlet /> {/* This renders nested route content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
