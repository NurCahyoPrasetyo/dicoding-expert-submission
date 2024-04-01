const SkiplinkInitiator = {
  init({ skipLinkBtn }) {
    skipLinkBtn.addEventListener("click", (event) => {
      this._handleSkipLinkKeydown(event, skipLinkBtn);
    });
  },

  _handleSkipLinkKeydown(event, skipLinkBtn) {
    if (event.key === " ") {
      event.preventDefault();
      skipLinkBtn.blur();
    }
  },
};

export default SkiplinkInitiator;
