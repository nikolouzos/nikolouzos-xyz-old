class NewsletterForm {
  constructor() {
    this.form = $('#newsletter form');
    this.loadingIcon = $('#newsletter form .loading-icon');
    this.formUrl = 'https://app.nikolouzos.xyz/newsletter';
    this.actionName = 'homepage-newsletter';
    this.onCreate();
  }

  onCreate() {
    this.form.on('submit', (e) => {
      e.preventDefault();

      var formValidation = this.formValidation()

      if (formValidation == null) {
        grecaptcha.ready(() => {
          grecaptcha.execute('6LegynQUAAAAABdfcPj0jZoYWSBw3EjejIL-FsvI', {
            action: this.actionName
          }).then(this.sendForm(token));
        });
      } else {
        NewsletterForm.newsletterCallback(false, formValidation);
      }
      return false;
    });
  }

  formValidation() {
    var botHoneypot = $('#newsletter form input[name=contact_me_by_fax_only]').val();

    // Try to fish out any bots
    if (botHoneypot == 1 || botHoneypot == true) {
      return 'Begone bot!';
    }

    if (/\d/.test($('#newsletter form input[name=name]').val())) {
      return 'The name you have supplied cannot contain numbers!';
    }

    return null;
  }

  sendForm(token) {
    // Show the loading icon
    this.loadingIcon.show();

    this.form.ajaxSubmit({
      url: this.formUrl,
      method: 'POST',
      beforeSubmit : function(arr, $form, options) {
        arr.push({name: 'token', value: token});
      },
      resetForm: 'true',
      success: function (responseText) {
        NewsletterForm.newsletterCallback(true, responseText);
      },
      error: function (responseText) {
        NewsletterForm.newsletterCallback(false, responseText);
      }
    });
  }

  static newsletterCallback(formIsSucessful, response) {
    // Hide the loading icon when you get a response
    $('#newsletter form .loading-icon').hide();

    var formResult = $('#newsletter .form-result');
    // Add the class and display the message
    if (formIsSucessful) {
      formResult.addClass('good');
    } else {
      formResult.addClass('bad');
    }
    formResult.text(response);

    // Remove the class that was added ('good' or 'bad') after 5s
    setTimeout(() => {
      formResult.removeClass('good');
      formResult.removeClass('bad');
    }, 5000);
  }
}

class ContactForm {
  constructor() {
    this.form = $('#contact-form');
    this.formUrl = 'https://app.nikolouzos.xyz/contact';
    this.loadingIcon = $('#contact-form .loading-icon');
    this.onCreate();
  }

  onCreate() {
    this.form.on('submit', (e) => {
      e.preventDefault();

      var validationMsg = this.formValidation();
      if (validationMsg === null) {
        // TODO add the reCaptcha v3 code
        this.sendForm();
      } else {
        ContactForm.contactCallback(false, validationMsg);
      }
      return false;
    });
  }

  formValidation() {
    var firstName = $('#contact-form input[name=firstname]').val();
    var lastName = $('#contact-form input[name=lastname]').val();
    var text = $('#contact-form textarea').val();
    var botHoneypot = $('#contact-form input[name=contact_me_by_fax_only]').val();

    // Try to fish out any bots
    if (botHoneypot == 1 || botHoneypot == true) {
      return 'Begone bot!';
    }

    if (!(/^[\d\s]+$/.test(firstName))) {
      if (!(/^[\d\s]+$/.test(lastName))) {
        if (text.length >= 0) {
          if (text.length <= 1000) {
            return null
          } else {
            return 'The text is too large!';
          }
        } else {
          return 'The text cannot be empty';
        }
      } else {
        return 'The last name cannot contain numbers or spaces';
      }
    } else {
      return 'The first name cannot contain numbers or spaces';
    }
  }

  sendForm() {
    // Show the loading icon
    this.loadingIcon.show();

    this.form.ajaxSubmit({
      url: this.formUrl,
      method: 'POST',
      resetForm: 'true',
      success: function (responseText) {
        ContactForm.contactCallback(true, responseText);
      },
      error: function (responseText) {
        ContactForm.contactCallback(false, responseText);
      }
    });
  }

  static contactCallback(formIsSucessful, response) {
    // Hide the loading icon when you get a response
    $('#contact-form .loading-icon').hide();

    var formResult = $('#contact .form-result');

    if (formIsSucessful) {
      formResult.addClass('good');
    } else {
      formResult.addClass('bad');
    }

    formResult.text(response);

    setTimeout(() => {
      formResult.removeClass('good');
      formResult.removeClass('bad');
    }, 5000);
  }
}