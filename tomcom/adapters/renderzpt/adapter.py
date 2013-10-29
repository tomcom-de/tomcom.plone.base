from tomcom.adapter.public import *
from Products.PageTemplates.ZopePageTemplate import ZopePageTemplate

class IRenderZPT(Interface):
    pass

class Adapter(Base):

    def __call__(self, string_, kwargs={}):

        context=self.context

        zpt = ZopePageTemplate('dummy')
        zpt.write(string_)
        return zpt.__of__(context).pt_render(extra_context={'options': kwargs})