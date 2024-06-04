$(document).ready(function () {
    const $carousel = $(".carousel"),
        $firstImg = $carousel.find("img").first(),
        $dots = $(".dot");

    let isDragStart = false,
        isDragging = false,
        prevPageX,
        prevScrollLeft,
        positionDiff;


    const updateDots = () => {
        let scrollLeft = $carousel.scrollLeft(),
            imgWidth = $firstImg.width() + 28, // Adjust for margin
            totalImgs = $carousel.find(".img-container").length,
            imagesPerSlide = totalImgs / 3; // Assuming there are three sets of images in total

        let index = Math.round(scrollLeft / (imgWidth * imagesPerSlide)); // Calculate index based on images per slide

        $dots.each(function (i) {
            if (i === index) {
                $(this).attr("src", "./static/images/1.svg");
            } else {
                $(this).attr("src", "./static/images/2.svg");
            }
        });
    };


    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.originalEvent.touches[0].pageX;
        prevScrollLeft = $carousel.scrollLeft();
    };

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        $carousel.addClass("dragging");
        positionDiff = (e.pageX || e.originalEvent.touches[0].pageX) - prevPageX;
        $carousel.scrollLeft(prevScrollLeft - positionDiff);
    };

    const dragStop = () => {
        isDragStart = false;
        $carousel.removeClass("dragging");

        if (!isDragging) return;
        isDragging = false;
    };

    $carousel.on("mousedown touchstart", dragStart);
    $(document).on("mousemove touchmove", dragging);
    $(document).on("mouseup touchend", dragStop);

    // Update dots initially and on scroll
    updateDots();
    $carousel.on("scroll", updateDots);

    // Add click event to dots to move carousel
    $dots.each(function (index) {
        $(this).on("click", function () {
            let imgWidth = $firstImg.width() + 28; // Adjust for margin
            let scrollPosition = imgWidth * (index * ($carousel.find(".img-container").length / 3)); // Calculate scroll position based on index
            $carousel.scrollLeft(scrollPosition);
            // setTimeout(updateDots, 60);
        });
    });
});
