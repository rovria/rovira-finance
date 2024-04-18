<template>
    <div class="section" style="padding-bottom:0rem;">
        <div class="container">
            <h1 class="rf_hero_h1 rf_black">Discover your true potential & finances</h1>
        </div>
    </div>
    <div class="section">
        <div class="container">
            <div class="inner-contact-wrapper">
                <div class="img-col"></div>
                <div class="form-col">
                    <h1 class="rf_contact_h3">Our team of experts is ready to answer your questions, give you more info and help you.</h1>
                    <form action="" class="form-wrapper">
                        <div class="input-wrapper">
                            <label for="">First Name</label><br>
                        <input type="text" placeholder="Ex. John">
                        </div>
                        <div class="input-wrapper">
                            <label for="">Last Name</label><br>
                        <input type="text" placeholder="Ex. Doe">
                        </div>
                        <div class="input-wrapper">
                            <label for="">Email</label><br>
                        <input type="text" placeholder="Ex. name@address.com">
                        </div>
                        <div class="input-wrapper">
                            <label for="">Telephone</label><br>
                        <input type="text" placeholder="Ex. 000-000-0000">
                        </div>
                        <div class="input-wrapper input-btn-wrapper">
                           <button class="rf_form-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.inner-contact-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    border: 1px solid red;
}
.img-col {
    width: 100%;
    height: 1095px;
    background-image: url('../assets/img/team.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 12px;
}
.form-col {
    display: flex;
    flex-direction: column;
    padding: 5rem 5rem;
}
.input-wrapper {
    margin-bottom: 17px;
    width: 100%;
}
.input-btn-wrapper {
    margin-top: 50px;
}
.form-wrapper {
    margin-top: 70px;
}
</style>