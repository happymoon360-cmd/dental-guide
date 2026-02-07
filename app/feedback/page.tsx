'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function FeedbackPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Formspree submission
      const response = await fetch('https://formspree.io/f/mjgrzdee', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

       if (response.ok) {
         setIsSubmitted(true);
       } else {
         // Fallback: open mailto with form data
         const tool = formData.get('tool');
         const helpful = formData.get('helpful');
         const mostHelpful = formData.get('mostHelpful');
         const improvements = formData.get('improvements');
         const recommend = formData.get('recommend');
         const email = formData.get('email');

         const subject = 'Dental Guide Feedback';
         const body = `
Tool Used: ${tool}
Helpful: ${helpful}

What was most helpful:
${mostHelpful || 'N/A'}

What could be improved:
${improvements || 'N/A'}

Would recommend: ${recommend}
Email: ${email || 'Not provided'}
         `.trim();

         window.location.href = `mailto:jun91249@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
         setIsSubmitted(true);
       }
     } catch (error) {
       console.error('Submission error:', error);
       // Fallback to mailto on error
       alert('Unable to submit. Please try again or email us directly at jun91249@gmail.com');
     } finally {
       setIsSubmitting(false);
     }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-6">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="rounded-3xl">
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Your feedback helps improve this free tool for everyone.
                    </p>
                    <Button onClick={() => window.location.href = '/'}>
                      Back to Home
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Container>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
                Share Your Feedback
              </h1>
              <p className="text-center text-gray-600">
                Takes less than 2 minutes • Your input helps us improve
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle>Feedback Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Which tool did you use? */}
                    <div className="space-y-2">
                      <Label htmlFor="tool">Which tool did you use?</Label>
                      <Select name="tool" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tool" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="script-builder">Script Builder</SelectItem>
                          <SelectItem value="school-finder">Dental Schools</SelectItem>
                          <SelectItem value="cost-estimator">Cost Calculator</SelectItem>
                          <SelectItem value="emergency-triage">Emergency Guide</SelectItem>
                          <SelectItem value="all">All Tools</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Did it help you? */}
                    <div className="space-y-2">
                      <Label htmlFor="helpful">Did it help you?</Label>
                      <Select name="helpful" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="somewhat">Somewhat</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* What was most helpful? */}
                    <div className="space-y-2">
                      <Label htmlFor="mostHelpful">What was most helpful?</Label>
                      <textarea
                        id="mostHelpful"
                        name="mostHelpful"
                        rows={3}
                        className="flex w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200 transition-colors resize-none"
                        placeholder="Tell us what you found useful..."
                      />
                    </div>

                    {/* What could be improved? */}
                    <div className="space-y-2">
                      <Label htmlFor="improvements">What could be improved?</Label>
                      <textarea
                        id="improvements"
                        name="improvements"
                        rows={3}
                        className="flex w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200 transition-colors resize-none"
                        placeholder="Let us know how we can do better..."
                      />
                    </div>

                    {/* Would you recommend to others? */}
                    <div className="space-y-2">
                      <Label htmlFor="recommend">Would you recommend to others?</Label>
                      <Select name="recommend" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="definitely">Definitely</SelectItem>
                          <SelectItem value="maybe">Maybe</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Email (optional) */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="text-base"
                      />
                      <p className="text-sm text-gray-500">
                        Only if you want us to follow up with you
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                    </Button>

                    <p className="text-center text-sm text-gray-500 pt-2">
                      Your feedback helps improve this free tool
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </main>
    </div>
  );
}
