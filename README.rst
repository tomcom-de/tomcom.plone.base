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


Copyrights and licenses
=======================

Bootstrap

- Copyright 2012 Twitter, Inc.
- Licensed under the `Apache License v2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_.
- See DOCS-LICENSE, LICENSE, LICENSE-MIT for bootstrap license

We changed the font path in the css files for a clean plone integration.

Font Awesome is licensed under GPL see http://fontawesome.io/license/ for additional information.

Font Awesome
 Font licensed under the `SIL Open Font License
 <http://scripts.sil.org/OFL>`_.

 CSS, LESS, and SASS files licensed under the
 `MIT License
 <http://opensource.org/licenses/mit-license.html>`_.

 Pictograms licensed under the `CC BY 3.0 License
 <http://creativecommons.org/licenses/by/3.0/>`_.