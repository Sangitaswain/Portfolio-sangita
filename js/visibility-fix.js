/* Visibility Fix for Resume and Contact Sections */
/* This script ensures the sections are visible and modules are initialized */

(function() {
    'use strict';
    
    console.log('🔧 Visibility Fix: Starting...');
    
    // Function to make sections visible
    function makeSectionsVisible() {
        const resumeSection = document.querySelector('#resume');
        const contactSection = document.querySelector('#contact');
        
        if (resumeSection) {
            resumeSection.classList.add('resume-visible');
            resumeSection.style.opacity = '1';
            resumeSection.style.transform = 'translateY(0)';
            resumeSection.style.visibility = 'visible';
            console.log('✅ Resume section made visible');
        } else {
            console.warn('⚠️ Resume section not found');
        }
        
        if (contactSection) {
            contactSection.classList.add('contact-visible');
            contactSection.style.opacity = '1';
            contactSection.style.transform = 'translateY(0)';
            contactSection.style.visibility = 'visible';
            console.log('✅ Contact section made visible');
        } else {
            console.warn('⚠️ Contact section not found');
        }
    }
    
    // Function to initialize modules
    function initializeModules() {
        // Initialize Resume Module
        if (window.ResumeModule && typeof window.ResumeModule.init === 'function') {
            try {
                window.ResumeModule.init();
                console.log('✅ ResumeModule initialized');
            } catch (error) {
                console.error('❌ ResumeModule initialization failed:', error);
            }
        } else {
            console.warn('⚠️ ResumeModule not available');
        }
        
        // Initialize Contact Module
        if (window.ContactModule && typeof window.ContactModule.init === 'function') {
            try {
                window.ContactModule.init();
                console.log('✅ ContactModule initialized');
            } catch (error) {
                console.error('❌ ContactModule initialization failed:', error);
            }
        } else {
            console.warn('⚠️ ContactModule not available');
        }
    }
    
    // Function to check and fix visibility
    function checkAndFixVisibility() {
        console.log('🔍 Checking section visibility...');
        
        const resumeSection = document.querySelector('#resume');
        const contactSection = document.querySelector('#contact');
        
        if (resumeSection) {
            const resumeStyle = window.getComputedStyle(resumeSection);
            console.log('📊 Resume section opacity:', resumeStyle.opacity);
            console.log('📊 Resume section transform:', resumeStyle.transform);
        }
        
        if (contactSection) {
            const contactStyle = window.getComputedStyle(contactSection);
            console.log('📊 Contact section opacity:', contactStyle.opacity);
            console.log('📊 Contact section transform:', contactStyle.transform);
        }
        
        // Force visibility
        makeSectionsVisible();
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                checkAndFixVisibility();
                initializeModules();
            }, 100);
        });
    } else {
        // DOM is already ready
        setTimeout(() => {
            checkAndFixVisibility();
            initializeModules();
        }, 100);
    }
    
    // Also run after a delay to catch any late-loading issues
    setTimeout(() => {
        console.log('🔄 Running delayed visibility check...');
        checkAndFixVisibility();
        initializeModules();
    }, 2000);
    
    // Export for debugging
    window.VisibilityFix = {
        makeVisible: makeSectionsVisible,
        initModules: initializeModules,
        check: checkAndFixVisibility
    };
    
    console.log('🔧 Visibility Fix: Loaded');
})();