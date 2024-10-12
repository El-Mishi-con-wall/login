function openModal (modalId){
    document.getElementById(modalId).style.display = "block";
}

function closeModal (modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const forgotPasswordModal = document.getElementById('forgot-password');
    const signupModal = document.getElementById('signup');

    if(event.target == forgotPasswordModal) {
        forgotPasswordModal.style.display = "none";
    }

    if(event.target == signupModal) {
        signupModal.style.display = "none";
    }

}