export const myAnimation = () : void =>
{
    const fadeUpOpacity: NodeListOf<Element> = document.querySelectorAll('.fade-up');
    const fadeDownOpacity: NodeListOf<Element> = document.querySelectorAll('.fade-down');

    // Scroll Height Animation
    const ANIMATE_HEIGHT: number = window.innerHeight / 5 * 4.3;

    // Fade-up Opacity
    const fadeUpCount: number = fadeUpOpacity.length;
    for (const index of generator(fadeUpCount)) {
        const item: Element = fadeUpOpacity[index];
        const fadeUp: any   = item.getBoundingClientRect().top;
        if(fadeUp < ANIMATE_HEIGHT) {
            item.classList.add("show-fade-up");
        }
    }

    // Fade-down Opacity
    const fadeDownCount: number = fadeDownOpacity.length;
    for (const index of generator(fadeDownCount)) {
        const item: Element = fadeDownOpacity[index];
        const fadeDown: any = item.getBoundingClientRect().top;
        if(fadeDown < ANIMATE_HEIGHT) {
            item.classList.add("show-fade-down");
        }
    }
}

const generator = function* (count: number) : any {
    let index: number = 0;
    while (index < count) {
        yield index++;
    }
}