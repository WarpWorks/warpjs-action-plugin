# WarpJS Action Plugin

This is the base "abstract" class for action plugins.

See [warpjs-plugin](https://github.com/WarpWorks/warpjs-plugin) for base plugin
documentation.

## API

These are the additional API on top of the `warpjs-plugin`.

### <a name="jsScriptUrl"></a> `.jsScriptUrl`

This getter returns the URL of the javascript file to be added to the `<script
src>`.

If you want to stay on the current page, this getter should return a URL, and
the script should handle a click on this action. Something like this:

    (($) => $(document).ready(() => {
      $(document).on('click', `[data-warpjs-plugin-identifier="your-identifier"]', function(e) {
        // Code to open a modal and deal with all the events.
      });
    }))(jQuery);

If you want the click to bring you to the path defined in the plugins'
configuration `path`, the getter should return a falsy value.


### <a name="getRootUrl"></a> `.getRootUrl(domain, type, id)`

Returns the URL to use to handle the current element. This implementation is
only needed if `.jsScriptUrl` getter is not falsy. This value will be set into
the element clicked (see [.jsScriptUrl](#jsScriptUrl)).

    $(this).data('warpjsPluginRootUrl');


### <a name="toJSON"></a> `.toJSON(domain, type, id)`

Get the JSON of the action plugin.
