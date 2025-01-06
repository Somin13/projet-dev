const sparkContainer = document.querySelector('.spark-container');

document.addEventListener('mousemove', (e) => {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.left = `${e.pageX}px`;
    spark.style.top = `${e.pageY}px`;
    sparkContainer.appendChild(spark);

    setTimeout(() => {
        spark.style.opacity = '1';

        spark.style.transform = 'translateY(-10px)';
    }, 10);

    setTimeout(() => {
        spark.style.opacity = '0';
        spark.style.opacity = '0';
        setTimeout(() => {
            spark.remove();
        }, 300);
    }, 500);
});

