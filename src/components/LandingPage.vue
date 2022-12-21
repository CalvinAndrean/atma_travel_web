<template>
    <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div class="container">
            <a class="navbar-brand logo-text" href="#">Jassa</a>
            <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <router-link to="/login">Login</router-link>
                <ul class="navbar-nav ms-auto navbar-nav-scroll">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#header">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#details">Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#features">Features</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown"
                            aria-expanded="false">Drop</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown01">
                            <li><a class="dropdown-item" href="#">Article Details</a></li>
                            <li>
                                <div class="dropdown-divider"></div>
                            </li>
                            <li><a class="dropdown-item" href="#">Terms Conditions</a></li>
                            <li>
                                <div class="dropdown-divider"></div>
                            </li>
                            <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                        </ul>
                    </li>
                </ul>
                <span class="nav-item">
                    <router-link class="btn-solid-sm" to="/login">Login</router-link>
                </span>
            </div>
        </div>
    </nav>

    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <h1 class="h1-medium">Traveling adalah cara mengenal Tuhan, alam sekitar, orang lain dan diri sendiri</h1>
                        <p class="p-large">Mari kita jalan-jalan dengan "Atma Travel"</p>
                        <a class="btn-solid-lg" href="#services">Offered services</a>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid" src="assets/images/travel-header1.png" alt="alternative" />
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div id="services" class="cards-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Explore our services</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">


                    <div class="card">
                        <div class="card-icon">
                            <span class="fas fa-headphones-alt"></span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Analyse your product</h5>
                            <p>Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis viverra. Nullam
                                pharetra ante at nunc elementum</p>
                            <a class="read-more no-line" href="#">Learn more <span
                                    class="fas fa-long-arrow-alt-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-icon red">
                            <span class="far fa-clipboard"></span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Evaluate opportunities</h5>
                            <p>Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit
                                scelerisque. Nunc placerat justo sem</p>
                            <a class="read-more no-line" href="#">Learn more <span
                                    class="fas fa-long-arrow-alt-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-icon green">
                            <span class="far fa-comments"></span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Find the influencers</h5>
                            <p>Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec magna tincidunt, nec pala
                                vehicula neque sodales verum</p>
                            <a class="read-more no-line" href="#">Learn more <span
                                    class="fas fa-long-arrow-alt-right"></span></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div id="details" class="basic-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid" src="assets/images/traveling-2.png" alt="alternative" />
                    </div>
                </div>
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <div class="section-title">Gunung Bromo</div>
                        <h2>Kabupaten Probolinggo, Jawa Timur</h2>
                        <p>Gunung Bromo adalah salah satu gunung api yang masih aktif di Indonesia.
                            Gunung yang memiliki ketinggian 2.392 meter di atas permukaan laut ini merupakan destinasi andalan Jawa Timur.
                            Gunung Bromo berdiri gagah dikelilingi kaldera atau lautan pasir seluas 10 kilometer persegi</p>
                        <a class="btn-solid-reg" href="#contact">Get quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="basic-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <div class="section-title">Candi Prambanan</div>
                        <h2>Kabupaten Sleman, Daerah Istimewa Yogyakarta</h2>
                        <p>Candi Prambanan dibangun sekitar pertengahan abad ke-9. 
                            Candi Hindu terbesar di Indonesia ini dibangun oleh raja dari Wangsa Sanjaya, 
                            yaitu Raja Balitung Maha Sambu. 
                            Pembangunan Candi Prambanan didasarkan pada isi dari 
                            Prasasti Syiwagrha yang ditemukan di sekitar Prambanan</p>
                        <a class="btn-outline-reg" href="#">Details</a>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid" src="assets/images/traveling-3.png" alt="alternative" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="details" class="basic-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid" src="assets/images/traveling-4.png" alt="alternative" />
                    </div>
                </div>
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <div class="section-title">Kepulauan Raja Ampat</div>
                        <h2>Kabupaten Raja Ampat, Provinsi Papua Barat</h2>
                        <p>Kepulauan Raja Ampat merupakan rangkaian empat gugusan pulau yang berdekatan dan berlokasi di barat bagian Kepala Burung (Vogelkoop) Pulau Papua. 
                            Secara administrasi, gugusan ini berada di bawah Kabupaten Raja Ampat, Provinsi Papua Barat. 
                            Asal mula nama Raja Ampat menurut mitos masyarakat setempat berasal dari seorang wanita yang menemukan tujuh telur. Empat butir di antaranya menetas 
                            menjadi empat orang pangeran yang berpisah dan masing-masing menjadi raja yang berkuasa di Waigeo, Salawati, Misool Timur dan Misool Barat</p>
                        <a class="btn-solid-reg" href="#contact">Get quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="features" class="accordion-1">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <h2 class="h2-heading">Online service features</h2>
                    <p class="p-heading">Suspendisse vitae enim arcu. Aliquam convallis risus a felis blandit, at mollis
                        nisi bibendum. Aliquam nec purus at ex blandit posuere nec a odio. Proin lacinia dolor justo</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <div class="accordion-icon">
                                <span class="fas fa-tv"></span>
                            </div>
                            <div class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Analyse the product and design plan
                                </button>
                            </div>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">Mauris ornare libero et pharetra hendrerit. Cura elementum
                                    lectus quis tellus pretium, vitae lobortis dui sagittis aliquam et enim vel semon
                                    anticus</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-icon blue">
                                <span class="fas fa-microphone"></span>
                            </div>
                            <div class="accordion-header" id="headingTwo">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Find the market opportunities
                                </button>
                            </div>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">Mauris ornare libero et pharetra hendrerit. Cura elementum
                                    lectus quis tellus pretium, vitae lobortis dui sagittis aliquam et enim vel semon
                                    anticus</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-icon purple">
                                <span class="fas fa-video"></span>
                            </div>
                            <div class="accordion-header" id="headingThree">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Prepare the product launch campaign
                                </button>
                            </div>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">Mauris ornare libero et pharetra hendrerit. Cura elementum
                                    lectus quis tellus pretium, vitae lobortis dui sagittis aliquam et enim vel semon
                                    anticus</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-icon orange">
                                <span class="fas fa-tools"></span>
                            </div>
                            <div class="accordion-header" id="headingFour">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Evaluate the campaign and adjust
                                </button>
                            </div>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">Mauris ornare libero et pharetra hendrerit. Cura elementum
                                    lectus quis tellus pretium, vitae lobortis dui sagittis aliquam et enim vel semon
                                    anticus</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid" src="assets/images/traveling-4.png" alt="alternative" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cards-2 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">Customer testimonials</h2>
                </div>l
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                        <div class="card-body">
                            <p class="testimonial-text">Liburan itu bukan untuk bermalas-malasan tapi untuk bersenang-senang menikmati petualang baru yang seru</p>
                            <div class="testimonial-author">Nicolaus Kevin Boro</div>
                            <div class="occupation">Manager</div>
                        </div>
                        <div class="gradient-floor red-to-blue"></div>
                    </div>
                    <div class="card">
                        <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                        <div class="card-body">
                            <p class="testimonial-text">Kalau kamu merasa tahu segalanya, pergilah traveling maka kamu akan menemukan hal baru yang belum kamu tahu</p>
                            <div class="testimonial-author">Nessafitri</div>
                            <div class="occupation">Programmer</div>
                        </div>
                        <div class="gradient-floor blue-to-purple"></div>
                    </div>
                    <div class="card">
                        <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                        <div class="card-body">
                            <p class="testimonial-text">Lebih baik melihat sesuatu sekali daripada mendengarnya seribu kali</p>
                            <div class="testimonial-author">Calvin Andrean</div>
                            <div class="occupation">Programmer</div>
                        </div>
                        <div class="gradient-floor purple-to-green"></div>
                    </div>
                    <div class="card">
                        <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                        <div class="card-body">
                            <p class="testimonial-text">Traveling bisa membuat kamu melihat betapa kecilnya tempat yang kamu tempati di dunia</p>
                            <div class="testimonial-author">M.Rizky Alfiriandy</div>
                            <div class="occupation">Programmer</div>
                        </div>
                        <div class="gradient-floor red-to-blue"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="slider-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Trusted by over <span class="blue">5000</span> customers worldwide</h4>
                    <hr class="section-divider" />
                    <div class="slider-container">
                        <div class="swiper-container image-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img class="img-fluid" src="assets/images/customer-logo-1.png" alt="alternative" />
                                </div>
                                <div class="swiper-slide">
                                    <img class="img-fluid" src="assets/images/customer-logo-2.png" alt="alternative" />
                                </div>
                                <div class="swiper-slide">
                                    <img class="img-fluid" src="assets/images/customer-logo-3.png" alt="alternative" />
                                </div>
                                <div class="swiper-slide">
                                    <img class="img-fluid" src="assets/images/customer-logo-4.png" alt="alternative" />
                                </div>
                                <div class="swiper-slide">
                                    <img class="img-fluid" src="assets/images/customer-logo-5.png" alt="alternative" />
                                </div>
                                <div class="swiper-slide">
                                    <img class="img-fluid" src="assets/images/customer-logo-6.png" alt="alternative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="basic-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <h2>Find the right influencer for your product</h2>
                        <p class="p-large">Eu convallis arcu ultrices in. Mauris ornare libero et pharetra hendrerit.
                            Curabitur elementum lectus quis vioc tellus</p>
                        <a class="btn-solid-lg" href="#contact">Get free quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="contact" class="form-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <div class="section-title">GET QUOTE</div>
                        <h2>Submit the form for quote</h2>
                        <p>Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem. Sed risus ipsum, egestas sed
                            odio in, pulvinar euismod ipsum. Sed ut enim non nunc fermentum dictum et sit amet erat.
                            Maecenas</p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="d-flex">
                                <i class="fas fa-square"></i>
                                <div class="flex-grow-1">Vel maximus nunc aliquam ut. Donec semper, magna a pulvinar
                                </div>
                            </li>
                            <li class="d-flex">
                                <i class="fas fa-square"></i>
                                <div class="flex-grow-1">Suscipit sit amet quis lorem. Sed risus ipsum, egestas mare
                                </div>
                            </li>
                            <li class="d-flex">
                                <i class="fas fa-square"></i>
                                <div class="flex-grow-1">Sem pulvinar suscipit sit amet quis lorem. Sed risus</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control-input" placeholder="Name" required />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control-input" placeholder="Industry" required />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control-input" placeholder="Your product" required />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="footer bg-gray">
        <img class="decoration-circles" src="assets/images/decoration-circles.png" alt="alternative" />
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h5>"One’s destination is never a place, but always a new way of seeing things"</h5>
                    <div class="social-container">
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <ul class="list-unstyled li-space-lg p-small">
                        <li><a href="#">Article Details</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12">
                    <p class="p-small statement">Copyright © <a href="#">Jassa</a></p>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12">
                    <p class="p-small statement">Distributed by <a href="https://therichpost.com/"
                            target="_blank">Jassa</a></p>
                </div>
            </div>
        </div>
    </div>
    <button id="myBtn">
        <img src="assets/images/up-arrow.png" alt="alternative" />
    </button>
</template>