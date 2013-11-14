Information
===========

Small helpers for daily usage.

For HTML

Click a link with this class and you will get a confirm message

> class="confirm-general"

Click a link with this class and you will get a confirm message
for deleting a content element

> class="confirm-delete"

Prevent the default click event. Usefull for dummy anker.

> <a class="no-click"

A overlay will appear. The link is the target

> <a class="custom-overlay-ajax"


Roles / Permissions
===================

"Is Site Administrator" a permission wich only belongs to Site Administrator

Bootstrap
=========

If you install this package, there is a complete set of
bootstrap 2.3.2 and Font Awesome included. Some css of plone will be disabled.

Some Templates are optimized to show them in bootstrap style

Status message
==============

A simple statusmessage to display an informaton for the user. 'success' is the
bootstrap style type Alle in bootstrap defined alert types are avaliable.

> $.status_message('Hello world','success');


Toolbar
=======

Move toolbar to the top of your template.

::

    <div class="plone-toolbar clearfix"
         tal:condition="context/@@plone/showEditableBorder">
        <tal:block tal:replace="structure provider:plone.contentviews"/>
    </div>

