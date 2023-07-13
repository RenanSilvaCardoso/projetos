var splide = new Splide( '.splide', {
    perPage: 3,
    perMove: 1,
    gap    : '1.5rem',
    padding: '3rem',
    type: 'loop',
    drag: 'free',
    snap: true,
    autoplay: true,
    breakpoints: {
      768: {
        perPage: 1,
        gap    : '.7rem',
        padding: '1.5rem',
      },
      640: {
        perPage: 2,
        gap    : '.7rem',
        padding: '1.5rem',
      },
      440: {
        perPage: 1,
        gap    : '.7rem',
        padding: '1rem',
      },
    },
  } );
  
  splide.mount();