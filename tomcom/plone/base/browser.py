# -*- coding: utf-8 -*-
from tomcom.browser.public import *

from ZTUtils import  make_query

class ITCBase(Interface):

    def make_link_all(self, view):
        """ """

class Browser(BrowserView):

    implements(ITCBase)

    def make_link_all(self, view):
        form = self.request.form
        if view.batchformkeys:
            batchlinkparams = dict([(key, form[key])
                                    for key in view.batchformkeys
                                    if key in form])
        else:
            batchlinkparams = form.copy()

        start = max(1 - 1, 0) * view.batch.pagesize
        batchlinkparams['batch_size']=9999999

        return '%s?%s' % (self.request.ACTUAL_URL, make_query(batchlinkparams,
                         {view.batch.b_start_str: start}))
